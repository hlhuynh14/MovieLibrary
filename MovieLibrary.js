function SearchBy(category, searchQuery)
{
    switch(category)
    {
        case 'Director Name':
            SearchByDirectorName(searchQuery)
            break;
        case 'Title':
            SearchByTitle(searchQuery)
            break;
        case 'Genre':
            SearchByGenre(searchQuery)
            break; 
        case null:
            SearchAll()
            break;   
    }
}
function SearchByDirectorName(name)
{
    $.get( "http://localhost:50983/api/Movie", function( data ) {
        $("#Table").empty();
        $.each(data, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName} </td></tr>`)            
              }, "json" );
})
}
function SearchByTitle(title)
{
    $.get( "http://localhost:50983/api/Movie", function( data ) {
        $("#Table").empty();
        $.each(data, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName} </td></tr>`)            
              }, "json" );
})
}
function SearchByGenre(genre)
{
    $.get( "http://localhost:50983/api/Movie", function( data ) {
        $("#Table").empty();
        $.each(data, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName} </td></tr>`)            
              }, "json" );
})
}

function SearchAll() 
{    
    $.get( "http://localhost:50983/api/Movie", function( data ) {
        $("#Table").empty();
        $.each(data, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName} </td></tr>`)            
              }, "json" );
})   
}