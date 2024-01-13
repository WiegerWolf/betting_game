# Betting Game

This is my "back of the napkin" code exploring the betting game described in https://youtu.be/UjsC2sk7vVg?si=bYMr-1Y1FIbTRRBC&t=386

## Rules

You start with $25. You bet a percentage of your money you have on hand each round. You can bet any percentage of your money each round. You can bet on heads or tails. 
You flip a coin. If you win, you get double your money back. If you lose, you lose the money you bet.

The coin is weighted. It's 60% heads, 40% tails.

## Goal

Find the strategy that maximizes the amount of money you walk away with after 100 rounds. You can walk away with any amount of money after 100 rounds up to $250.

## Results

Below are the results of running the game with different strategies. The strategies are described in the code.

- X axis is the percentage of money you bet each round (from 0% to 100%, with ticks each 10%). 
- Y axis is the amount of money you walk away with at the end of the game.

Each graph has min and max values for the Y axis. The min and max values are the lowest and highest amount of money you walk away with at the end of the game.

```
betAlwaysOnHeads min: 25, max: 188.804
                        **                                                                           
                  ** ***   **                                                                        
               ***  *     *  ****                                                                    
             **                  *****                                                               
            *                         *                                                              
           *                           ***                                                           
          *                               ***                                                        
                                              *   ***                                                
         *                                   * ***     *                                             
        *                                            **  *                                           
                                                        * * *                                        
       *                                                     ** ***                                  
                                                           *   *   *** *                             
      *                                                               *  ***                         
                                                                        *   **                       
     *                                                                        ***  *** *     *  *    
                                                                                 **   * *****    **  
   **                                                                                         **   * 
                                                                                                     
  *                                                                                                  
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betOnTailsAfterWinning3TimesInARow min: 25, max: 91.036
                         *                                                                           
                        * *                                                                          
              *   * **      *                                                                        
               **  *   *                                                                             
                 *    *    *  *    *                                                                 
             *               *  * *    *                                                             
                               * *  * *                                                              
          ***                        *                                                               
                                        **  *                                                        
                                          ** ****  * *                                               
         *                                        *                                                  
                                                 *    *   *            *                             
        *                                           *   *  * ***   *                                 
       *                                               * *  *    *  **   * *                         
      *                                                         *     *   *     *                    
                                                                        *   * *  *  *    *      *    
     *                                                            *          * *   * *    *  *   *   
   **                                                                             *   ***   * *      
                                                                                           *   *  ** 
  *                                                                                                  
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betOnTailsAfterWinning7TimesInARow min: 25, max: 136.102
                  *       *                                                                          
                 * *** ***  ***                                                                      
                *     *    *   **  *                                                                 
               *                 *   *                                                               
              *                   * * *                                                              
            **                         * *                                                           
           *                            * **                                                         
          *                                 *    **                                                  
                                                *  ** *                                              
         *                                   **        *                                             
        *                                      *     *  **                                           
                                                          * *       *                                
       *                                                   *  **** * **     *                        
                                                             *    *     *                            
      *                                                                * ***              *          
                                                                             ** ******   * *         
     *                                                                         *      ***   **** **  
   **                                                                                           *  * 
                                                                                                     
  *                                                                                                  
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betOnHeads80PercentOfTheTime min: 25, max: 105.397
                              *                                                                      
                ***** *** **   *                                                                     
               *     *   *  *     *                                                                  
              *              *  ** *                                                                 
                                     *                                                               
            **                      * *                                                              
           *                           *                                                             
          *                             **  **    *                                                  
                                          **  ** *  **                                               
         *                                         *  * *                                            
                                                          *                                          
        *                                       *      *   **    *                                   
       *                                                 *   * **    *    **                         
      *                                                       *   *** *  *   *                       
                                                                       **     *                      
                                                                            *  * ** *** * **** **    
     *                                                                          *  *   *             
   **                                                                                         *  **  
                                                                                         *         * 
  *                                                                                                  
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betOnHeads60PercentOfTheTime min: 23.474, max: 45.941
                    **          *                                                                    
                             *                                                                       
                              *  *                                                                   
                ** *     *        *   *                                                              
                       ** * *           *                                                            
               *      *                                                                              
             **                    *       *                                                         
          ***     *            *               *   *                                                 
         *                 *           *     *   **       *          *     *                         
                                    *                *                 *                             
                                          * *   *   *    *       *                                   
        *                            *   *            **      **   *     *     *            *        
      *                                                 *   *     *     *    *   **       *  *   *   
       *                                                   *              * *       ***         *    
     *                                                       *        *            *   *      *      
    *                                                                           *        *           
   *                                                                                           *     
                                              *                 *   *         *                      
  *                                                                                     *  *      *  
**                                                                                                   
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betOnHeadsHalfTheTime min: 17.201, max: 31.276
                                                                                *           *        
                                                                                                     
                                                                                                     
                   *                                                                     *        *  
                     *    *                                                  *                       
                                                    *                                         * **   
                 *                                *                            *           *         
                                         **           *   *     *      *    *       *   * *          
     ***              **         * *  *    * *   *         *        *                *         *     
*****   **  *                 *             *        *  *                                            
           *                    *             *                  *                     *           * 
          *       * *   *    * *               *                   * **          *    *              
              **         *          **          *             *           **  *              *       
             *  *          *           **                      *  *                *                 
                            *                          * *              *                            
                                  *                          *                                       
                                                                                                     
                                                   *                              *                  
                                                            *                                        
                                                                                                     
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betOnHeads40PercentOfTheTime min: 10.337, max: 25
**                                                                                                   
  *                                                                                                  
                                                                                             * *  ** 
                                                                                                *    
   *                                                            * *                *  *              
    **                                                      * **                     *      *        
      *                               *                   *          *                 ** *          
       *                                        *                  **  * *      **         *         
                                                                              *   *                  
        *                                     *    *   **                  * *           *           
                                *         *  * *                 *    *     *                 *  *   
         ***                       **  **        *   *   * *            * *                          
                    **   * *               *        *                          *    *                
            ***   *                  *            *                                                  
                 *                                                                                   
                *           **                        *      *                                       
                   *  **         **         *                                                        
               *        * *              *                                                           
                                                                                                     
                                                                                                     
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betOnHeads20PercentOfTheTime min: 2.894, max: 25
**                                                                                                   
  *                                                                                                  
                                                                                                     
                                                                                                     
                                                                                                     
                                                                                                     
   *                                                                                                 
                                                                      *                              
    *                                                                                  *          *  
                                                                                 *** **     *        
     *                                                           *              *   *   * **   *     
      *                                                       *     *    *    *          *   **      
       *                                       **            * *        * ** * *                ** * 
        *                                     *        *  *       *  *      *                        
         *                                   *     * *                 *                             
          *                          *    * *           ** **   *  *                                 
           **                              *     ** * *                                              
             **                * *  * ****                                                           
               * *  *  **   * * * *                                                                  
                * ** **  ***       *                                                                 
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1



betAlwaysOnTails min: 1.302, max: 25
**                                                                                                   
  *                                                                                                  
                                                                                                     
                                                                                                     
                                                                                                     
                                                                                                     
                                                                                                     
   *                                                                                                 
                                                                                                     
                                                                                                     
    *                                                                                                
                                                                                     *    *          
     *                                                                           *    *    *   * * * 
      *                                                                      *    *      *   *  *    
       *                                                                 *     *    *  **   * *      
        *                                        *          *           *     *    *              *  
         *                                     *   *         * *   **     **    *                    
          ***                            *      * * **    *   *  **  ***    *                        
             ****                  **   * * **        **** *    *                                    
                 ********      ****  ***   *  *                                                      
0---------|---------|---------|---------|---------|---------|---------|---------|---------|---------1

```

## Conclusion

The best strategy when playing with 60% heads weighted coin, is to always bet on heads about 20% of your money.
This is the strategy that maximizes the amount of money you walk away with at the end of the game.
