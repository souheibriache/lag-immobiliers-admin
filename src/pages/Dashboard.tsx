import type React from "react";
import {
  Building2,
  Calendar,
  Activity,
  CreditCard,
  ClipboardList,
  Loader2,
  Users,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 p-6">
        <PageTitle title="Tableau de bord" />
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-10 h-10 text-purple animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-6">
      <PageTitle title="Tableau de bord" />
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) => (
  <div
    className={`${color} text-white rounded-lg shadow-md p-6 flex items-center justify-between`}
  >
    <div>
      <p className="text-sm font-medium opacity-90">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
    <div className="bg-white/20 p-3 rounded-full">{icon}</div>
  </div>
);

// Stat Item Component
const StatItem = ({
  icon,
  label,
  value,
  percentage,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  percentage: number;
  color: string;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <div className={`${color} p-2 rounded-full`}>{icon}</div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-sm font-semibold">{value}</span>
      <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
        {percentage}%
      </span>
    </div>
  </div>
);

export default Dashboard;
