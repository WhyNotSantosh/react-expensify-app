import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense by id if not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
    const expense = {
        id: "4",
        description: "sharp",
        note: "",
        amount: 198,
        createdAt: 2000,
      };
  const action = {
    type: "ADD_EXPENSE",
    expense: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense by id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
        note: "updated"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toEqual("updated");
});

test("should edit expense if id not found", () => {
    const action = {
      type: "EDIT_EXPENSE",
      id: '-1',
      updates: {
          note: "updated"
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });