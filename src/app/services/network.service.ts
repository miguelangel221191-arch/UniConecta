import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Network } from '@capacitor/network';

@Injectable({
providedIn: 'root'
})
export class NetworkService {

private onlineStatus = new BehaviorSubject<boolean>(true);

constructor() {
this.initializeNetwork();
}

async initializeNetwork() {

const status = await Network.getStatus();

this.onlineStatus.next(status.connected);

Network.addListener(
'networkStatusChange',
(status) => {

console.log(
'Estado de red:',
status.connected
);

this.onlineStatus.next(
status.connected
);

}
);
}

getConnectionStatus() {
return this.onlineStatus.asObservable();
}
}