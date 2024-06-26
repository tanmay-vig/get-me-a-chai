export default function Home() {
    return (
      <>
        <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
            <div className="font-bold text-3x1">Buy Me a Chai</div>
            <p>
                A crowdfunding platform for creators. Get funded by your fans
                and followers. Start now!
            </p>
            <div>
                <button
                    type="button"
                    className=" Itext-white bg-gradient-to-br
from-purple-600 ☐ to-blue-500 hover:bg-gradient-to-bl focus:ring-4
focus:outline-none ☐ focus: ring-blue-300 ☐ dark: focus: ring-blue-800
font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Start Here
                </button>{" "}
                <button
                    type="button"
                    className=" Itext-white bg-gradient-to-br
from-purple-600 ☐ to-blue-500 hover:bg-gradient-to-bl focus:ring-4
focus:outline-none ☐ focus: ring-blue-300 ☐ dark: focus: ring-blue-800
font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Read More
                </button>{" "}
            </div>
        </div>
        <div className=" bg-white h-1 opacity-10">
        </div>
        </>
    );
}
