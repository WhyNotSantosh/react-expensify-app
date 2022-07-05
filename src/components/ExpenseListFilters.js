import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setFilterText,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused });
  };
  onTextChange = (e) => {
    this.props.setFilterText(e.target.value);
  };
  onSortChange = (e) => {
    console.log(this.props.filters);
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={"start"}
          endDate={this.props.filters.endDate}
          endDateId={"end"}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterText: (text) => dispatch(setFilterText(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
