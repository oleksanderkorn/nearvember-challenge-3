import { useEffect, useState } from "react";
import ErrorPopup from "./ErrorPupop";
import GifContainer from "./Gif";

const HelloWorld = ({ currentUser, contract }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    contract.get_response({ accountId: currentUser.accountId }).then((text) => {
      console.log(text);
      setMessage(text);
    });
  });

  const isValidName = () => name !== "";

  const sendMessage = () => {
    setIsLoading(true);
    if (isValidName) {
      contract.hello_world({ name }).then(
        () => {
          setIsLoading(false);
          setName("");
        },
        (err) => {
          setError(`${err}`);
          setIsLoading(false);
        }
      );
    }
  };

  return (
    <div className="md:container md:mx-auto">
      {isLoading ? (
        <div className="mt-4 mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-20 w-20"></div>
      ) : (
        <div className="mt-4 h-20 w-20"></div>
      )}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              What's Your Name?!
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="border-2 p-1 border-green-500 rounded"
                value={name}
                placeholder="Enter Your Name"
                onChange={(event) => setName(event.target.value)}
              />
              <button
                disabled={!isValidName()}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
            <ErrorPopup error={error} callback={() => setError("")} />
          </div>
        </div>
      </div>
      {message && (
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            CHUCKY SPEAKS:
          </div>
          <p className="mt-2 mb-5 text-gray-500">{message}</p>
          <GifContainer name={name} />
        </div>
      )}
    </div>
  );
};

export default HelloWorld;
