import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const Spinner = () => (
    <div className="flex items-center justify-center h-full">
        <RefreshIcon className="animate-spin h-16 w-16 text-gray-500" />
    </div>
);

export default Spinner;
