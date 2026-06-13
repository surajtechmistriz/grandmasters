import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { addToCart } from "../services/APIs/cart";
import { useNavigate } from "react-router-dom";
import ahd from "../assets/icons/ahd.avif";
import hyd from "../assets/icons/hyd.png";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  events: any[];
  selectedPlanId: number | null;
};

const CitySelectorModal = ({
  isOpen,
  onClose,
  events,
  selectedPlanId,
}: Props) => {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // Modal open/close debug
  useEffect(() => {
    console.log("  CitySelectorModal isOpen:", isOpen);
  }, [isOpen]);

  // Event selection debug
  const handleSelectEvent = (eventId: number) => {
    console.log("  Event selected:", eventId);
    setSelectedEventId(eventId);
    setError(null); // clear old error
  };

  if (!isOpen) {
    console.log("  Modal not rendered (isOpen=false)");
    return null;
  }

  const handleAddToCart = async () => {
    console.log("  Continue clicked");

    if (!selectedEventId) {
      console.warn("  No event selected");
      return;
    }

    if (!selectedPlanId) {
      console.warn("  No plan selected");
      return;
    }

    const payload = {
      event_type_id: 6,
      event_id: selectedEventId,
      plan_id: selectedPlanId,
      quantity: 1,
    };

    console.log("  AddToCart payload:", payload);

    try {
      setLoading(true);
      console.log("  API call started...");

      const res = await addToCart(payload);

      await queryClient.refetchQueries({
        queryKey: ["cart"],
      });

      navigate("/cart");

      console.log("  ADD TO CART FULL RESPONSE:", res);
      console.log("  RESPONSE DATA:", res?.data);

      console.log("  EVENT TYPE ID:", res?.data?.data?.event_type_id);
      console.log("  EVENT TYPE NAME:", res?.data?.data?.event_type_name);
      console.log("  EVENT ID:", res?.data?.data?.event_id);
      console.log("  EVENT NAME:", res?.data?.data?.event_name);

      console.log("  ITEMS:", res?.data?.data?.items);
      console.log("  SUBTOTAL:", res?.data?.data?.subtotal);
      console.log("  GST:", res?.data?.data?.gst_amount);
      console.log("  TOTAL:", res?.data?.data?.total);

      console.log("  Navigating to /cart");
      navigate("/cart");

      console.log("  Closing modal");
      onClose();
    } catch (err: any) {
      console.error("  ADD TO CART ERROR:", err);

      const msg =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";

      setError(msg);

      console.log("  RESPONSE DATA:", err?.response?.data);
      console.log("  STATUS:", err?.response?.status);
    } finally {
      setLoading(false);
      console.log("  Loading finished");
    }
  };

  const cityIconMap: Record<string, string> = {
    Ahmedabad: ahd,
    Hyderabad: hyd,
  };

  return (
    <div className="fixed inset-0 z-50 flex -mt-30 items-center justify-center bg-black/20">
      <div className="relative w-full max-w-5xl bg-white p-8 rounded-lg shadow-xl mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-center text-xl font-medium text-gray-700 mb-8">
          Select City
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-6 justify-items-center">
          {events.map((event: any) => {
            const isSelected = selectedEventId === event.id;

            return (
              <div
                key={event.id}
                onClick={() => handleSelectEvent(event.id)}
                className="flex flex-col items-center cursor-pointer group"
              >
                {/* ICON WRAPPER */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full transition-all duration-200
                    ${
                      isSelected
                        ? "bg-red-100 ring-2 ring-red-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  <img
                    src={
                      cityIconMap[event.city_name] ||
                      cityIconMap[event.city?.name] ||
                      event.icon ||
                      event.city_icon ||
                      "/placeholder.png"
                    }
                    alt={event.city_name || event.city?.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* LABEL */}
                <span
                  className={`mt-2 text-sm font-medium text-center transition-colors
                  ${
                    isSelected
                      ? "text-red-600"
                      : "text-gray-600 group-hover:text-black"
                  }`}
                >
                  {event.city_name || event.city?.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleAddToCart}
            disabled={!selectedEventId || loading}
            className={`px-6 py-3 rounded-md font-bold text-white transition cursor-pointer
              ${
                !selectedEventId || loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#D0252D] hover:bg-[#D0252d]"
              }`}
          >
            {loading ? "Adding..." : "Continue"}
          </button>
        </div>
        {error && (
          <div className="mb-4 text-center text-red-600 font-medium">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default CitySelectorModal;
