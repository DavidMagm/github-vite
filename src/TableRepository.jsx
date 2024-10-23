function TableRepository({nameRepository, descriptionRepository, languageRepository}) {
    //console.log(props.dataRepos)
    return(
        <>
                <div className="container-repos-data">
                    <span>{nameRepository}</span>
                    <span>{descriptionRepository}</span>
                    <span>{languageRepository}</span>
                </div>
            
            
        </>
    )
}
export {TableRepository}