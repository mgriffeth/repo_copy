var repos_url = 'https://api.github.com/users/mgriffeth/repos',
    user_url = 'https://api.github.com/users/mgriffeth',
    org_url = 'https://api.github.com/users/mgriffeth/orgs';


var repo_template_string =$('#repo_template').html();
var rendered_repo_template = _.template(repo_template_string);
var repos_api = $.getJSON(repos_url).done(function(x){
  console.log(x);
  x.forEach(function(repo){
    console.log(repo.name);
    $('.repositories').append( rendered_repo_template (repo));
  })
});


var user_template_string =$('#user_template').html();
var rendered_user_template = _.template(user_template_string);

var user_api = $.getJSON(user_url).done(function(user){
  console.log(user);
  $('#av').append(rendered_user_template(user));

});


var mini_temp_string =$('#minitemp').html();
var rendered_minitemp = _.template(mini_temp_string);
$.getJSON(user_url).done(function(user){
  $('.user_links_box').append(rendered_minitemp);
});
//////////////////////////////////////////////////////////
var rendered_org_template = _.template($('.org_template').html())

$.getJSON(org_url).done(function(org){
  console.log(org);
  org.forEach(function(x){
    console.log(x);
    $('#org_box').append(rendered_org_template(x))
  })
});
