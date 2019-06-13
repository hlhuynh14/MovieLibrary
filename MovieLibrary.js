function SearchBy()
{
    
    let category = $("#myList")[0].value;
    let searchQuery = $("#search")[0].value;
    if (!searchQuery) {
        category = null;
    }
    switch(category)
    {
        case 'director':
            SearchByDirectorName(searchQuery)
            break;
        case 'title':
            SearchByTitle(searchQuery)
            break;
        case 'genre':
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
        let filteredData = data.filter(function(value){
            return value.DirectorName === name;
        })
        $.each(filteredData, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName} </td><td><button onclick="UpdateMovie(${value})">Update Movie</button></td></tr>`)            
              }, "json" );
})
}
function SearchByTitle(title)
{
    $.get( "http://localhost:50983/api/Movie", function( data ) {
        $("#Table").empty();
        let filteredData = data.filter(function(value){
            return value.Title === title;
        })
        $.each(filteredData, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName} </td><td><button onclick="UpdateMovie(${value})">Update Movie</button></td></tr>`)            
              }, "json" );
})
}
function SearchByGenre(genre)
{
    $.get( "http://localhost:50983/api/Movie", function( data ) {
        $("#Table").empty();
        let filteredData = data.filter(function(value){
            return value.Genre === genre;
        })
        $.each(filteredData, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName} </td><td><button onclick="UpdateMovie(${value})">Update Movie</button></td></tr>`)            
              }, "json" );
})
}

function SearchAll() 
{    
    $.get( "http://localhost:50983/api/Movie", function( data ) {
        $("#Table").empty();
        $.each(data, function(key,value ) {
            $("#Table").append(`<tr><td>${value.Title} </td><td>${value.Genre} </td><td>${value.DirectorName}</td><td><button onclick="UpdateMovie(${value})">Update Movie</button></td></tr>`)            
              }, "json" );
})   
}

function AddMovie(){
    $.ajax({
        url: "http://localhost:50983/api/Movie",
        dataType: 'text',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        data: $('#NewMovie').serialize(),
        success: function( data, textStatus, jQxhr ){            
            $('#response pre').html( data );
        },
        error: function( jqXhr, textStatus, errorThrown ){           
            console.log( errorThrown );
        }
    }); 
}
function UpdateMovie(){
    $.ajax({
        url: "http://localhost:50983/api/Movie",
        dataType: 'text',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        data: $('#NewMovie').serialize(),
        success: function( data, textStatus, jQxhr ){            
            $('#response pre').html( data );
        },
        error: function( jqXhr, textStatus, errorThrown ){           
            console.log( errorThrown );
        }
    }); 
}

