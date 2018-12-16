import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent,
        activatedRoute: ActivatedRouteSnapshot,
        router: RouterStateSnapshot) {

        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra?');
        } else {
            return true
        }
    }

}