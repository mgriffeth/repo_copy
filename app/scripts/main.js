var repos_url = 'https://api.github.com/users/mgriffeth/repos',
    user_url = 'https://api.github.com/users/mgriffeth';


var repo_template_string =$('#repo_template').html();

var rendered_repo_template = _.template(repo_template_string);

var repos_api = $.getJSON(repos_url).done(function(x){
  //console.log(x);
  x.forEach(function(repo){
    //console.log(repo.name);
    $('.repositories').append( rendered_repo_template (repo));
  })
});

var user_api = $.getJSON(user_url).done(function(user){
  console.log(user.name);
});
