/* eslint-disable @next/next/no-img-element */
import { StarFilled } from "@ant-design/icons";
import React from "react";

const Stars: React.FC = () => {
  return (
    <div className="bg-primary text-slate-50 flex flex-col px-10">
      <div className="text-center flex items-center justify-center max-w-2xl mx-auto">
        <div className="pb-6">
          <h1 className="text-4xl py-10">Star Badges</h1>
          <p className="my-4">
            The top 3 contributors for Fork, Commit, Merge repository are
            awarded with a star badge.
          </p>
          <p className="my-4">
            The contributors are ranked by the number of merged pull requests
            they have made to the project, so in other words, the most issues
            solved. The contributor with the most merged pull requests is
            awarded with a golden star badge, the contributor with the second
            most merged pull requests is awarded with a silver star badge and
            the contributor with the third most merged pull requests is awarded
            with a bronze star badge.
          </p>

          <hr className="my-6" />
          <div className="flex justify-center my-6">
            <StarFilled
              style={{
                fontSize: 100,
                color: "gold",
              }}
            />

            <StarFilled
              style={{
                fontSize: 100,
                color: "silver",
              }}
            />

            <StarFilled
              style={{
                fontSize: 100,
                color: "var(--color-bronze)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
