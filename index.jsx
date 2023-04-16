import React from "react";
import { InfoBenefits } from "./InfoBenefits";
import "./Benefits.scss";

export const Benefits = () => {
  const descr =
    "Поступающий в помещение воздух фильтруется и очищается от вредных веществ, пыльцы, пыли и насекомых. Мы дышим чистым воздухом без аллергенов и навсегда можем забыть про комаров.";
  return (
    <>
      <span className="benefits-header">Что даёт нам вентиляция</span>
      <div className="benefits">
        <InfoBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoBenefits title={"Дыхание чистым воздухом"} discription={descr} />
        <InfoBenefits title={"Дыхание чистым воздухом"} discription={descr} />
      </div>
    </>
  );
};
