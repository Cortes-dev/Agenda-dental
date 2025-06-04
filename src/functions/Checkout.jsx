import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "sonner";

const stripePromise = loadStripe(
  "pk_test_51PXoWNRvElf86SiAci5SLtBDMIvqvdcQzFPYvHhMmYKkh5P2iACLPAq40CbeMKkAf3Lr4o6Mv1xWOiqppaCra56D00vaeuGDqW"
);

export const handleCheckout = async (plan) => {
  const stripe = await stripePromise;

  console.log(plan);

  try {
    // ⚠️ Ruta del backend (cuando lo tengas)
    const response = await axios.post("http://localhost:8000/api/checkout", {
      plan: plan.nombre,
    });

    const session = response.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  } catch (error) {
    console.error("Error al procesar pago con Stripe:", error);
    toast.error("Ocurrió un error al redirigir al pago.");
  }
};
