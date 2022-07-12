import React from "react";
import { Button } from "../../components/Button";

export const Test = () => {
  return (
    <div>
      <Button text="click me" />
      <Button text="click me" disabled={true} />
      <Button text="click me" withFrame={true} />
      <Button text="click me" withFrame={true} disabled={true} />
      <Button text="click me" withoutFrame={true} />
      <Button text="click me" blackButton={true} />
      <Button text="Перейти к оплате" bigButton={true} />
    </div>
  );
};
