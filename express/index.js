const express = require('express');
const multer = require('multer');
const app = express();
const mutler = require('multer');  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Single File upload
const upload = mutler({ dest: 'uploads/' });  // mutler comes with middlerware
app.post('/upload',upload.single("file"), (req, res)=>{
    res.json({status : "success"});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multiple File upload
app.post('/multi/uploads', upload.array('file'), (req, res)=>{ // you can set limit here .array('file',5) maximum 5 photo
    res.json({status : "success"});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multiple Fields Upload  like image for profile feild or a resume feild
const multiFeilds = upload.fields([
    {name : "profile", maxCount : 1},        // feild name, limit
    {name : "resume", maxCount : 1}
]);
app.post('/multiFeild/uploads', multiFeilds, (req, res)=>{
    console.log(req.files);
    res.json({status : "success"});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Custom file name
const uuid = require('uuid').v4;
const storage = mutler.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "uploads");
    },
    filename : (req, file, cb)=>{
        const {originalname} = file
        cb(null, `${uuid()}-${originalname}`)
    }
})
const uploads = mutler({storage});
app.post('/customeName/uploads', uploads.array('file'), (req, res)=>{
    // console.log(req.files);
    res.json({status : "success"});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Specific file type uplaod
const uuid2 = require('uuid').v4;
const storage2 = mutler.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "uploads");
    },
    filename : (req, file, cb)=>{
        const {originalname} = file
        cb(null, `${uuid2()}-${originalname}`)
    }
})
const fileFiler = (req, file, cb)=>{
    if(file.mimetype.split('/')[0] == 'image/jpeg'){     // ["image", "jpeg"]
        cb(null, true)
    }
    else{
        cb(new mutler.MulterError("LIMIT_UNEXPECTED_FILE"), false)
    }
}
const uploads2 = mutler({storage2, fileFiler,limits : {fileSize : 100000000, files : 2}});
app.post('/currectType/upload',uploads2.array('file'),(req, res)=>{
    res.json({status : 'success'});
});
//Handler Errors
app.use((error, req, res, next)=>{
    if(error instanceof multer.MulterError){
        if(error.code === "LIMIT_FILE_SIZE"){
            return res.json({message : 'File size to large'});
        }
        if(error.code === "LIMIT_FILE_COUNT"){
            return res.json({message : 'File limit reached'});
        }
        if(error.code === "LIMIT_UNEXPECTED_FILE"){
            return res.json({message : 'File Must be Image type '});
        }
    }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(8080, ()=>{
    console.log('server is running');
})