app={

aritGeo: function(arr)
            {
                var differ=0;
                var ratio=0;
                differ=(arr[0]-arr[1]);
                ratio=(arr[1]/arr[0]);
                

                    if(arr.length===0)
                    {
                        return 0;
                    }
                    else
                    {
                    for (var i=0;i<arr.length;i++)
                    {
                      var statement;
                      
                        var checkDiffer=(arr[i]-arr[i+1]);
                        var checkRatio=(arr[i+1]/arr[i]);
                        
                        if (checkDiffer==differ)
                        {
                          
                          statement="Arithmetic";

                        }
                        else if(checkRatio==ratio)
                        {
                        statement='Geometric';
                        
                        }
                        else
                        {
                            statement=-1;

                        }
                        if (i==arr.length-2)
                        
                        {break;}
                    
                       
                      
                      
                    }
                    }
                                              
                return statement;
                }
}
            
                module.exports = app
