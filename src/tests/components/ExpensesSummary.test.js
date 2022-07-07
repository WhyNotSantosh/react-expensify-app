import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test("should render ExpesesSummary with one expense", () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpesesSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={4566985} />);
    expect(wrapper).toMatchSnapshot();
});