import moment from "moment";

export default [
    {
      id: "1",
      description: "gum",
      note: "",
      amount: 175,
      createdAt: 0,
    },
    {
      id: "2",
      description: "rent",
      note: "",
      amount: 15000,
      createdAt: moment(0).subtract(4, 'days').valueOf(),
    },
    {
      id: "3",
      description: "pencil",
      note: "",
      amount: 1800,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
  ];