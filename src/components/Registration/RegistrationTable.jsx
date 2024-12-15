import { useState, useMemo } from "react";
import { Table, Input, Divider } from "rsuite";
import PropTypes from 'prop-types';

const RegistrationTable = ({ data }) => {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const { Column, HeaderCell, Cell } = Table;
  const filteredData = data.filter((item) =>
    `${item.firstName} ${item.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sortedData = useMemo(() => {
    let sorted = [...filteredData];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sorted;
  }, [filteredData, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      const direction =
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc";
      return { key, direction };
    });
  };


  return (
    <div className="w-full  mx-auto p-6 bg-white rounded-2xl shadow-md h-[calc(100vh-305px)]">
      <div className="flex items-center justify-between">
        <Input
          value={search}
          onChange={setSearch}
          placeholder="Search by name"
          style={{ width: 400 }}
        />

      </div>

      <Divider />

      {/* Table */}
      <Table
        height={400}
        data={sortedData.length ? sortedData : data}
        sortColumn={sortConfig.key}
        sortType={sortConfig.direction}
        onSortColumn={(key) => handleSort(key)}
        style={{
          width : "100%"
        }}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>No.</HeaderCell>
          <Cell>
            {(rowData, rowIndex) => <span>{rowIndex + 1}</span>}
          </Cell>
        </Column>

        <Column width={200} sortable>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={200} sortable>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200} sortable>
          <HeaderCell>Phone</HeaderCell>
          <Cell dataKey="phone" />
        </Column>
      </Table>
    </div>
  );
};

RegistrationTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RegistrationTable;
