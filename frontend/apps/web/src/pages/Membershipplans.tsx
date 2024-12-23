import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { setUserDetails } from '../store/authSlice';
import { setSessionId } from '../store/subscriptionSlice';
import CustomTransition from "../components/CustomTransition";
import CustomDialog from "../components/CustomDialog";
// Define the Subscription Plan type
interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
}

interface MembershipPlansProps {
  subscriptionPlans: Plan[];
}

const MembershipPlans = ({ subscriptionPlans }: MembershipPlansProps) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [cancelSubscription, setCancelSubscription] = useState(false);
  const [reasonCancel, setReasonCancel] = useState("");
  // const sessionId = useSelector((state: RootState) => state.subscription.sessionId);
  const userId = useSelector((state: RootState) => state.auth.userId);
  const level = useSelector((state: RootState) => state.auth.level);

  const dispatch = useDispatch(); // Moved here - hooks must only be defined at the top of functional components

  const handleSubscribeClick = async (plan: string, isDowngrade = false) => {
    try {
      const customerData = await subscribeToPlan(plan, isDowngrade);

      if (customerData.success) {
        await createSubscription(plan, isDowngrade, dispatch);
      } else {
        throw new Error(customerData.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Subscription Error:", error);
      setToastOpen(true);
      setNotificationText("Oops! Something went wrong. Please try again.");
    }
  };



  useEffect(() => {
    const fetchUserLevel = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
      
        dispatch(setUserDetails({
          userId: userData._id || null,
          admin: userData.admin || false,
          username: userData.username || null,
          email: userData.email || null,
          level: userData.level || null,
          stripeSessionId: userData.stripeSessionId || null,
          token: userData.token || null,
          avatar: userData.avatar || null,
        }));
       
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUserLevel();
    }
  }, []); // Add userId as a dependency


  const subscribeToPlan = async (plan: string, isDowngrade: boolean) => {
    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe/create-customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ plan, isDowngrade, userId }),
      });


      if (!response.ok) {
        throw new Error("Failed to create customer.");
      }

      const customerData = await response.json();
      return { success: true, data: customerData };
    } catch (error) {
      console.error("Error in subscribeToPlan:", error);
      return { success: false, message: error?.message };
    }
  };

  const createSubscription = async (plan: string, isDowngrade: boolean, dispatch: any) => {
    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe/create-subscription-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan, modeType: isDowngrade, userId: userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to create subscription checkout session.");
      }

      const data = await response.json();
      // console.log("data.session.id",data.session.id)
      dispatch(setSessionId(data.session.id));

      window.location.href = data.session.url; // Redirect to Stripe checkout
    } catch (error) {
      console.error("Error in createSubscription:", error);
    }
  };

  const sendCancelReason = async () => {

    try {
      
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe/cancelSubscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId , reasonCancel: reasonCancel}),
      });

      if (!response.ok) {
        throw new Error("Failed to create subscription checkout session.");
      }

      const data = await response.json();
      console.log(data)
      setNotificationText(data.message);
    } catch (error) {
      console.error("Error in createSubscription:", error);
    }
    console.log("Reason for cancellation:", reasonCancel);
    setCancelSubscription(false);
    setToastOpen(true);
    
  };

  const closeToast = () => setToastOpen(false);

  return (
    <>
      {/* Snackbar */}
      {toastOpen && (
        <div
          className="fixed bottom-5 right-5 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg"
          onClick={closeToast}
        >
          {notificationText}
        </div>
      )}

      {/* Membership Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          Please Subscribe to a Plan, Cancel Anytime
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg ${plan.name === level ? "bg-gray-300" : "bg-white"
                } shadow-md hover:shadow-lg transition`}
            >
              {plan.name === level ? (
                // Render cancellation component
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Are you sure you want to cancel this subscription?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Please provide the reason for canceling.
                  </p>
                  <img src="/monthly.png" />

                  <div className="mt-4 flex justify-end space-x-4">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-lg"
                      onClick={() => setCancelSubscription(true)}
                    >
                      Cancel
                    </button>

                  </div>
                </div>
              ) : (
                // Render subscription plan card
                <div>
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                  <p className="text-2xl font-semibold mt-2">{plan.price}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={() => handleSubscribeClick(plan.name)}
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Cancel Subscription Dialog */}
        <CustomTransition show={cancelSubscription}>
          <CustomDialog
            isOpen={cancelSubscription}
            onClose={() => setCancelSubscription(false)}
          >
            <h3 className="text-xl font-bold mb-4">
              Are you sure you want to cancel this subscription?
            </h3>
            <p className="text-gray-600 mb-4">
              Please provide the reason for canceling.
            </p>
            <textarea
              className="w-full border rounded-lg p-2"
              rows={3}
              value={reasonCancel}
              onChange={(e) => setReasonCancel(e.target.value)}
            />
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={sendCancelReason}
              >
                Finalize
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={() => setCancelSubscription(false)}
              >
                Cancel
              </button>
            </div>
          </CustomDialog>
        </CustomTransition>
      </div>


    </>
  );
};

export default MembershipPlans;
