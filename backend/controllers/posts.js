const Post = require("../models/post");
const fs = require('fs');
const path = require('path');


exports.addProperty = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const post = new Post({
    title: req.body.title,
    city: req.body.city,
    description: req.body.description,
    address: req.body.address,
    sip: req.body.sip,
    typology: req.body.typology,
    rooms: req.body.rooms,
    toilets: req.body.toilets,
    floor: req.body.floor,
    type: req.body.type,
    price: req.body.price,
    rented: req.body.rented,
    sold: req.body.sold,
    prenoted: req.body.prenoted,
    exclusive: req.body.exclusive,
    position: req.body.position
  });

  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      const element = req.files[i];
      post.imagePath.push(url + "/images/" + req.files[i].filename);
    }
  }

  // post: {
  //   ...createdPost._doc,
  //   id: createdPost._id
  // }

  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added succesfully!",
    });
  })
    .catch(error => {
      res.status(500).json({
        message: "Creation post failed!"
      });
    });
};

exports.getPropertys = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedPosts = [];
  postQuery.sort({ date: 'desc' });
  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  postQuery.then(documents => {
    fetchedPosts = documents;
    return Post.countDocuments();
  })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched succesfully",
        properties: fetchedPosts,
        postsCount: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
}

exports.getProperty = (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      });
    });
};

exports.deleteProperty = (req, res, next) => {

  Post.findOneAndDelete({ _id: req.params.id }).then(
    post => {
      const filenames = [];
      for (let i = 0; i < post.imagePath.length; i++) {
        const element = post.imagePath[i];
        filenames.push(path.basename(element));
      }
      const fileStoragePath = path.join(__dirname + '/../images/');

      filenames.forEach(
        file => fs.unlink(fileStoragePath + file, (err) => {
          if (err) { throw err; }
        }
        )
      );

      res.status(200).json({ message: "Deleted successful!" });

    }).catch(error => {
      res.status(500).json({
        message: "Deleting  failed!"
      });
    });
}

exports.updatePost = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  let imagePath = req.body.imagePath;

  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      const element = req.files[i];
      imagePath = [];
      imagePath.push(url + "/images/" + req.files[i].filename);
    }
  }
  const post = new Post({
    _id: req.body._id,
    city: req.body.city,
    title: req.body.title,
    description: req.body.description,
    address: req.body.address,
    sip: req.body.sip,
    typology: req.body.typology,
    rooms: req.body.rooms,
    toilets: req.body.toilets,
    floor: req.body.floor,
    type: req.body.type,
    price: req.body.price,
    rented: req.body.rented,
    sold: req.body.sold,
    prenoted: req.body.prenoted,
    exclusive: req.body.exclusive,
    position: req.body.position,
    imagePath: imagePath
  });
  Post.updateOne({ _id: req.params.id }, post)
    .then(result => {
      // console.log('impagepath ', post.imagePath);
      // const filenames = [];
      // for (let i = 0; i < post.imagePath.length; i++) {
      //   const element = post.imagePath[i];
      //   filenames.push(path.basename(element));
      // }
      // const fileStoragePath = path.join(__dirname + '/../images/');
      // filenames.forEach(
      //   file => fs.unlink(fileStoragePath + file, (err) => {
      //     if (err) { throw err; }
      //   }
      //   )
      // );
      res.status(200).json({ message: "Update successful!" });
      // if (result.n > 0) {
      //  // res.status(200).json({ message: "Update successful!" });

      // } else {
      //   res.status(401).json({ message: "Not authorized!" });

      // }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't update post!"
      });
    });
};

exports.getExclusiveProperties = (req, res, next) => {
 
 Post.find({exclusive: true})
 .then( result => {
   res.status(200).json({
     exclusive: result
   });
 }

 ).catch(err  => res.status(500));
};