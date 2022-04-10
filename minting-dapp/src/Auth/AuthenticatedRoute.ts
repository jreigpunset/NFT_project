import { Interface } from 'ethers/lib/utils';
import {map, Matcher, redirect} from 'navi';
import { isContext } from 'vm';


interface Context {
    token:string;
}

export function withAuthentication(matcher: Matcher<{}, Context>) {
 return map((_, Context: Context) => Context.token ? matcher:redirect('/login'))
}

