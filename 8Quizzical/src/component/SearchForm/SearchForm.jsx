import './searchForm.css'

export default function SearchForm({form, result, handleForm, search, }) {
    const formInputs=[
        {
            name:"category", 
            label: "Category", 
            inputOptions:[
                {value: 'music', name: "Music"}, {value:'sport_and_leisure', name: "Sport and leisure"}, 
                {value: 'film_and_tv' , name: "Film and TV"}, {value: "arts_and_literature", name: "Arts and literature"}, 
                {value: "history", name: "History"},{value: "society_and_culture", name: "Society and Culture"}, 
                {value: "science", name: "Science"}, {value: "geography", name: "Geography"}, {value: "food_and_drink", name: "Food and drink"}, 
                {value: "general_knowledge", name: "General knowledge"},
                {value: "india", name:"India"}, {value: "all", name: "All"}]
        },
        {
            name:"difficulty", 
            label:"Difficulty", 
            inputOptions:[
                {value:"easy" , name: "Easy"}, {value:"medium" , name: "Medium"},
                {value:"hard" , name: "Hard"}, {value:"all" , name: "All"},]
        },
    ]

    const formData= formInputs.map((formInput) => {
        return (
            <div className={`${formInput.name}--details`} key= {formInput.name}>
                <label htmlFor={formInput.name}>{formInput.label}</label>
                <select name={formInput.name} id={formInput.name} onChange= {(event) => handleForm(event)} value= {form[formInput.name]}>
                    {
                        formInput.inputOptions.map((option)=> (
                            <option key= {option.value} value = {option.value}>{option.name}</option>
                    ))}
                </select>
            </div>
        )
    })

    return (
        <div className="search--form" style={result ? {pointerEvents: 'none'} : {}}>
            <form className='form'>
                {formData}
            <button onClick={search} className='search--button'>Search</button>
            </form>
      </div>
    )
}