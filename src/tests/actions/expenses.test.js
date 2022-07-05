import { removeExpense, editExpense, addExpense } from "../../actions/expenses";

test("Setup remove exense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "New note" },
  });
});

test("Should setup add expense action object with passed values", () => {
  const expense = {
    description: "Desc",
    note: "note",
    amount: 5,
    createdAt: 1000,
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

test("Should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({    
    type: "ADD_EXPENSE",
    expense:{
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)}
  });
});
