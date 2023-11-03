const express = require('express');
const Contact = require('../models/Contact')
const router = express.Router();

 

router.post("/add_contact" ,async(req,res) => {
  try {
        const {name , email , Phone } = req.body
        const newContact = new Contact({name , email , Phone})
        await newContact.save()
        res.status(200).send({ msg: "contact added", newContact });
    } catch (error) {
        res.status(400).send({ msg: "can not add this contact" });
    }
})

router.get("/get_contact/:id",async(req,res)=>{
try {
    const contactToGet = await Contact.findOne({_id:req.params.id})
    res.status(200).send({msg :"contact getted",contactToGet})
} catch (error) {
    res.status(400).send({msg : "can not get this contact",error})
}
})
router.delete("/delete_contact/:_id",async(req,res)=>{
    try {
    const {_id} = req.params
    await Contact.findOneAndDelete((_id))
    res.status(200).send({msg :"contact delted",})
    } catch (error) {
        res.status(400).send({msg : "can not delete this contact",error})
        
    }

})

router.put("/update_user/:_id",async(req,res)=>{
try {
    const {_id} = req.params
    const result = await Contact.updateOne({_id}, {$set: {...req.body}})
    res.status(200).send({msg :"contact updated",})

} catch (error) {
    res.status(400).send({msg :"can not get this contact",error})
    
}
})

router.get('/get_contacts', async(req,res)=>{
    try {
    const contactlist = await contact.find()
    res.status(200).send({msg : "list",contactlist})
    } catch (error) {
    res.status(400).send({msg : "can not get this list",error})
    }
})




module.exports = router;
