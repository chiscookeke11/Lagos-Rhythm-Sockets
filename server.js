const { Server } = require("socket.io");

const io = new Server(3001, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("send-message", (data) => {
        // broadcast to everyone
        io.emit("receive-message", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});
