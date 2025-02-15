// app/dashboard/layout.js (Dashboard Layout)
import PageTransition from "@/components/PageTransition";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Add any sidebar or other components here if necessary */}
      <div className="flex-1">
        <PageTransition>{children}</PageTransition>
      </div>
    </div>
  );
}
