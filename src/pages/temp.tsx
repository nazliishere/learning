import Card from "@/components/Card";
import React from "react";

export default function TempPage() {

  return <div className="p-6 flex gap-4">
    <Card
        title="Mamad Bagheri"
        description="Mamad is unemployed"
        imgUrl="/img/profile.jpg"
        link="/404"
    />
    <Card
        title="Ali Bagheri"
        description="Ali is Mamad twin brother"
        imgUrl="/img/profile.jpg"
        link="/404"
    />
  </div>;
}
