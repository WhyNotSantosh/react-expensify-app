import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history ={push:jest.fn()};
  wrapper = shallow(<EditExpensePage 
    editExpense={editExpense} 
    removeExpense={removeExpense}
    history={history}
    expense={expenses[2]}
    />);
});

test("should render edit expense page", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render edit expense page", () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("should render edit expense page", () => {
  wrapper.find('button').prop('onClick')(expenses[2].id,);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
});