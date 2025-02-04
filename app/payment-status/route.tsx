"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PaymentStatus = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const paymentIntentStatus = query.get("status");
    const paymentIntentId = query.get("payment_intent");

    if (paymentIntentStatus === "succeeded") {
      setStatus("Оплата прошла успешно");
    } else if (paymentIntentStatus === "failed") {
      setError("Ошибка при обработке платежа");
    } else if (paymentIntentStatus === "requires_action") {
      setError("Необходимы дополнительные действия для завершения платежа.");
    } else {
      setError("Неизвестный статус платежа.");
    }

    if (paymentIntentId) {
    }
  }, []);

  return (
    <div>
      <h1>Статус платежа</h1>
      {status && <p>{status}</p>}
      {error && <p>{error}</p>}
      <button onClick={() => router.push("/profile")}>
        Вернуться в профиль
      </button>
    </div>
  );
};

export default PaymentStatus;
