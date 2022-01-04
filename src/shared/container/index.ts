import { container } from "tsyringe";
import { IBooksRepository } from "../../modules/books/repositories/IBooksRepository";
import { BooksRepository } from "../../modules/books/repositories/implementation/BooksRepository";

container.registerSingleton</*interface do repositorio*/>(
    /*"nome do rep"*/,
    /*implementação do rep*/
);
