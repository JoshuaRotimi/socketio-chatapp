const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new Conversation

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const setConvo = await newConversation.save();
    res.status(200).json(setConvo);
  } catch (e) {
    res.status(500).json(e);
  }
});

//get Conversation
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (e) {}
});

//get conversation with two user ids
router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
