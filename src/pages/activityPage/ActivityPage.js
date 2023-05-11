import * as React from "react";
import ActivityPageContent from "./ActivityPageContent";

export default function ActivityPage({ children }) {
  return (
    <div className="activityPage">
      <ActivityPageContent />
      {children}
    </div>
  );
}
