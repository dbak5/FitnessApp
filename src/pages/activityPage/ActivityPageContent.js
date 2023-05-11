import DatePicker from "../../components/calendar/DatePicker";
import * as React from "react";
import ActivityTable from "../../components/tables/ActivityTable";
import TableCard from "../../components/cards/TableCard";

export default function ActivityPageContent({ children }) {
  return (
    <div className="activityPage">
      <h1>ACTIVITY</h1>
      <DatePicker />
      <TableCard>
        <ActivityTable />
      </TableCard>
      <p>Programs are added to calendar automatically</p>
      <p>Comment section against each lift</p>
      <p>Somehow denote if there is a failed or made lift</p>
      {children}
    </div>
  );
}
