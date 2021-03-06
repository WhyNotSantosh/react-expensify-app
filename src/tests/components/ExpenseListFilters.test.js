import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setFilterText = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setFilterText={setFilterText}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render expense list filters", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render expense list filters with alt filters", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change filter", () => {
  const value = "gum";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test("should start by date", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  const value = "date";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should start by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date change", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle focus change", () => {
  const calendarFocused = 'endDate';
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
