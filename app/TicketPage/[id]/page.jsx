import EditTicketForm from "@/app/(components)/EditTicketForm";

const getTicketById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const TicketPage = async ({ params }) => {
    let updateTicketData = {};
    const EDITMODE = params.id === "new" ? false : true;

    if (EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        updateTicketData = updateTicketData.found;
    } else {
        updateTicketData = {
            _id: "new",
        };
    }


    return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;