import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { removeExpense, editExpense, addExpense, startAddExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  onValue,
  push,
} from "firebase/database";
const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("Should add expense to db and store", (done) => {
  const store = createMockStore({});
const expenseDefault ={
  description: "",
  note: "",
  amount: 0,
  createdAt: 0,
}
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseDefault
      }
    });
    onValue(ref(database),
    (dataSnapshot) => {
    expect(dataSnapshot.val()).toEqual(expenseDefault);
    }, {
        onlyOnce: true
    }
)
    done();
  });
});

test("Should add expense with default values to db and store", () => {
  
});
// test("Should setup add expense action object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({    
//     type: "ADD_EXPENSE",
//     expense:{
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)}
//   });
// });
