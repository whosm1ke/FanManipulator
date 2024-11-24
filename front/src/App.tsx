import {useState} from 'react';
import {DefaultService} from "./api/fan/DefaultService.ts";
import setupAxios from "./startup.ts";

setupAxios()

function App() {
    const [fanStatus, setFanStatus] = useState<string | undefined>('');

    const handleFanToggle = async (status: string) => {
        try {
            const service = new DefaultService()
            const response = await service.fan({status: status})
            setFanStatus(response.fan || response.error);
        } catch (error) {
            console.error("Error fetching fan status:", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">Fan Control</h1>
                <div className="flex flex-column space-y-4">
                    {fanStatus === "on" ? (<img src="../src/icons/workingFan.gif" alt="Fan is working, LOL!"/>) : (
                        <img src="../src/icons/notWorkingFan.png" alt="Fan is not working, not LOL!"/>)}
                    <div className="space-x-4">
                        <button
                            onClick={() => handleFanToggle('on')}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                        >
                            Turn Fan On
                        </button>
                        <button
                            onClick={() => handleFanToggle('off')}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                        >
                            Turn Fan Off
                        </button>
                    </div>
                </div>

                {fanStatus && <p className="mt-4 text-lg">Fan Status: {fanStatus}</p>}
            </div>
        </div>
    );
}

export default App;