const User = require('./models/User')
const Post = require('./models/Post')
const UpVote = require('./models/UpVote')
const DownVote = require('./models/DownVote')
const Favorite = require('./models/Favorite')

async function doSeeds() {
  let users = []
  let posts = []

  await User
    .query()
    .then(response => users = response)
  await Post
    .query()
    .then(response => posts = response)

  posts = posts.sort(() => Math.random() - 0.5)

  for(const user of users) {
    if(user.username === 'evansst') console.log('Sam!')
    else {
      for(let j = 0; j < rand(0, 10); j++) {
        const min = rand(0, posts.length - 1)
        const max = rand(min, posts.length)
        for(let i = min; i < max; i++){
          await UpVote
          .query()
          .insert({
            user_id: user.id,
            post_id: posts[i].id,
          })
          .then(console.log)
        }
      }
      
      for(let j = 0; j < rand(0, 4); j++) {
        const min = rand(0, posts.length - 1)
        const max = rand(min, posts.length)
        for(let i = min; i < max; i++){
          await DownVote
            .query()
            .insert({
              user_id: user.id,
              post_id: posts[i].id,
            })
            .then(console.log)
        }
      }

      for(let i = 0; i < posts.length/10; i++){
        const j = rand(0, posts.length)
        await Favorite
          .query()
          .insert({
            user_id: user.id,
            post_id: posts[j].id,
          })
          .then(console.log)
      }
    }
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

doSeeds().then(() => console.log('DONE!'))



var spareRandom = null;

function normalRandom()
{
	var val, u, v, s, mul;

	if(spareRandom !== null)
	{
		val = spareRandom;
		spareRandom = null;
	}
	else
	{
		do
		{
			u = Math.random()*2-1;
			v = Math.random()*2-1;

			s = u*u+v*v;
		} while(s === 0 || s >= 1);

		mul = Math.sqrt(-2 * Math.log(s) / s);

		val = u * mul;
		spareRandom = v * mul;
	}
	
	return val;
}

function normalRandomInRange(min, max)
{
	var val;
	do
	{
		val = normalRandom();
	} while(val < min || val > max);
	
	return val;
}

function normalRandomScaled(mean, stddev)
{
	var r = normalRandom();

	r = r * stddev + mean;

	return Math.round(r);
}

function lnRandomScaled(gmean, gstddev)
{
	var r = normalRandom();

	r = r * Math.log(gstddev) + Math.log(gmean);

	return Math.round(Math.exp(r));
}