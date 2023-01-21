import { Input, Select, Space, Table } from "antd";

const { Search } = Input;

const columns = [
  {
    title: "User",
    dataIndex: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Phone number",
    dataIndex: "phone",
  },
  {
    title: "Position",
    dataIndex: "position",
  },
  {
    title: "Department",
    dataIndex: "department",
  },
  {
    title: "Activity",
    dataIndex: "activity",
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    status: "active",
    phone: `9989 ${i}`,
    position: "designer",
    department: "pride 1",
    activity: "2 days ago",
  });
}

const StatistikaPage = () => {
  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="statistika">
      <div className="statistika__box">
        <div className="statistika__box-item">
          <span className="statistika__box-num">12</span>
          <span className="statistika__box-name">O’quvchilar</span>
        </div>
        <div className="statistika__box-item">
          <span className="statistika__box-num">12</span>
          <span className="statistika__box-name">Bo'limlar</span>
        </div>
        <div className="statistika__box-item">
          <span className="statistika__box-num">0</span>
          <span className="statistika__box-name">Mehmonlar</span>
        </div>
      </div>
      <div className="statistika__search-box">
        <Space>
          <Search
            placeholder="input search text"
            style={{ width: 700 }}
            allowClear
            enterButton="Qidirish"
            size="large"
            onSearch={onSearch}
          />
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              {
                value: "All",
                label: "All",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "disabled",
                label: "Disabled",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              {
                value: "All",
                label: "Bo’limlar",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "disabled",
                label: "Disabled",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </Space>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default StatistikaPage;
