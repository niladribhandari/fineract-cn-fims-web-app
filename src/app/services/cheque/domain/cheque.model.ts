/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {MICR} from './micr.model';
import {State} from './state.model';

export interface Cheque {
  micr: MICR;
  drawee: string;
  drawer: string;
  payee: string;
  amount: string;
  dateIssued: string;
  openCheque: boolean;
  state: State;
  journalEntryIdentifier: string;
}
