import { setStartDate, setEndDate, setFilterText, sortByAmount, sortByDate } from "../../actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});

test("should generate text filter action object",() => {
    const action = setFilterText("bill");
    expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "bill" });
});

test("should generate default text filter action object",() => {
    const action = setFilterText();
    expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});


test("should generate amount filter action object",() => {
  const action = sortByAmount();  
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT'});
});

test("should generate sort by date filter action object",() => {
  const action = sortByDate(); 
  expect(action).toEqual({ type: 'SORT_BY_DATE'});
});
