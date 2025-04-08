import { ArrowPathIcon } from '@heroicons/react/24/outline'
import React from "react";

const Spinner = () => (
    <div className="flex items-center justify-center h-full">
        <ArrowPathIcon className="animate-spin h-16 w-16 text-gray-500" />
    </div>
);

export default Spinner;
