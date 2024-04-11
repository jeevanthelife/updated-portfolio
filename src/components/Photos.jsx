import React from "react";

const photos = [
  {
    image:
      "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/281795044_5334039273329324_6112544423413210112_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u_I7Xq7pKmMAb6he3f1&_nc_ht=scontent.fktm8-1.fna&oh=00_AfDpaw2BitrHauENEltlyzzP328nzL8CVT0GEhhJXA8rcA&oe=66173752",
  },
  {
    image:
      "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/275946006_5177386278994625_4790133898391273083_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TPQDBppPtH0Ab7lhwhJ&_nc_ht=scontent.fktm8-1.fna&oh=00_AfC33Hh0qlqKjlheFg_X58aGfhD3vYS9xaTpgQgjgQ_vHQ&oe=66172CBF",
  },
  {
    image:
      "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/280937869_5334038739996044_1138877851125035322_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kICsIF1kPg4Ab7nbeks&_nc_oc=AdgI5dG8ugQYes5AbLBEyqvQl4k6wxlUmujkz24UgQWS_zkqhqezgdvo47F8jwdLtHYCnXz24IrvQ6vTPMPvn5iQ&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAwAU3jXACgJfuScLG1PofaEz_wf5r0pvzg_2XU-elk6Q&oe=66170AE6",
  },
  {
    image:
      "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/118765514_3479965572070046_7870458021994998625_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NseqwOwRH4kAb74aBBr&_nc_ht=scontent.fktm8-1.fna&oh=00_AfBBVUZ3a7NUDW75xu6Mm2AyoEm5pdMDPcTTZDZ2aQMbNQ&oe=6638C6A0",
  },
];
function Photos() {
  return (
    <div className="w-full lg:px-8 py-8" id="photos">
    <div>
      <h1 className="text-3xl lg:px-12 px-10 ">Photos</h1>
      <div className="photo-items grid lg:grid-cols-2 gap-4 w-full lg:px-12 px-10 py-6">
        {photos.map((photo, index) => (
          <div className="aspect-square">
            <img
              key={index}
              className="object-cover w-full h-full"
              src={photo.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Photos;
