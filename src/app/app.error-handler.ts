import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string

        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            errorMessage =
                `${error.url}: ${error.status} - ${error.status || ''} ${body}`;
        } else {
            errorMessage = error.errorMessage ? error.errorMessage : error.toString();
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage);
    }
}