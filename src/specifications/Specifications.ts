
//sito, one duck to check => is the duck ok? no search/storing/repository_knowledge
export interface Specification <T> {

    isSatisfiedBy(item: T): boolean

}

