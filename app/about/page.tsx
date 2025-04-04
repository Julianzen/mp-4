export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center bg-blue-200 p-4">
            <h1 className="text-3xl font-bold mb-4">About The Weathery Weather</h1>
            <img
            src="/photo-1601370552761-d129028bd833.jpg"
            alt="Cloudy sky"
            className="w-1/2"
            />
            <p>This website shows you the weather today for any city you enter.</p>
        </div>
    );
}